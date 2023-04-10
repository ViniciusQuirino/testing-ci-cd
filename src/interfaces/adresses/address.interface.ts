export interface IAddressCreateRequest {
	street: string;
	number: string;
	complement?: string;
	zip_code: string;
	city: string;
	state: string;
}
