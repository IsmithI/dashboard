interface TypedResponse<T = any> extends Response {
	/**
	 * this will override `json` method from `Body` that is extended by `Response`
	 * interface Body {
	 *     json(): Promise<any>;
	 * }
	 */
	json<P = T>(): Promise<P>;
}

interface Payload<T> {
	status: number;
	payload: T;
}

declare function fetch<T>(...args: any): Promise<TypedResponse<T>>;

export const restGet = <T extends any>(url: string) => fetch<T>(url).then(res => res.json().then(data => data as T));

export const get = <T extends any>(url: string) => fetch<Payload<T>>(url).then(res => res.json().then(data => data.payload as T));

export const put = <T extends any>(url: string, data: any) =>
	fetch<Payload<T>>(url, {
		method: "put",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
	}).then(res => res.json().then(data => data.payload as T));
