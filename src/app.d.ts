declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				/* eslint-disable  @typescript-eslint/no-explicit-any */
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
