export interface IAddressCreateRequest {
	street: string;
	number: string;
	complement?: string | null;
	zip_code: string;
	city: string;
	state: string;
}
