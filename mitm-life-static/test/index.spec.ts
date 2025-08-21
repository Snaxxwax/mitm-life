import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src';

describe('MITM.life Red Team Platform', () => {
	describe('homepage', () => {
		it('serves red team focused homepage', async () => {
			const request = new Request<unknown, IncomingRequestCfProperties>('http://example.com/');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			const text = await response.text();
			expect(text).toContain('Red Team Methodologies');
			expect(text).toContain('Advanced Attack Methodologies');
			expect(response.status).toBe(200);
		});
	});

	describe('techniques page', () => {
		it('serves red team techniques page', async () => {
			const request = new Request<unknown, IncomingRequestCfProperties>('http://example.com/techniques');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			const text = await response.text();
			expect(text).toContain('Red Team Techniques');
			expect(text).toContain('Network Infiltration');
			expect(response.status).toBe(200);
		});
	});

	describe('tools page', () => {
		it('serves red team tools page', async () => {
			const request = new Request<unknown, IncomingRequestCfProperties>('http://example.com/tools');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			const text = await response.text();
			expect(text).toContain('Red Team Tools');
			expect(text).not.toContain('$199');
			expect(text).not.toContain('OSINT');
			expect(response.status).toBe(200);
		});
	});

	describe('health check', () => {
		it('returns healthy status with updated version', async () => {
			const request = new Request('http://example.com/health');
			const response = await SELF.fetch(request);
			const data = await response.json();
			expect(data.status).toBe('healthy');
			expect(data.version).toBe('3.0.0-redteam');
			expect(response.status).toBe(200);
		});
	});
});
