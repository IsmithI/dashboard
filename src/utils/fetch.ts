interface TypedResponse<T = any> extends Response {
  /**
   * this will override `json` method from `Body` that is extended by `Response`
   * interface Body {
   *     json(): Promise<any>;
   * }
   */
  json<P = T>(): Promise<P>
}

interface Payload<T> {
	status: number;
	payload: T;
}

declare function fetch<T>(...args: any): Promise<TypedResponse<T>>

export const get = <T>(url: string) => fetch<Payload<T>>(url).then(res => res.json());

export const put = (url: string, data: any) =>
	fetch(url, {
		method: "put",
		body: JSON.stringify(data)
	}).then(res => res.json());
