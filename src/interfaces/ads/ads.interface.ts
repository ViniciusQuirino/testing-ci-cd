export interface IAdsCreateRequest {
	brand: string;
	model: string;
	launch_year: Date;
	car_color: string;
	fuel: number;
	fuel_type: string;
	km: number;
	price: number;
	description: string;
}

export interface IAdsResponse {
	id: string;
	brand: string;
	model: string;
	launch_year: Date;
	car_color: string;
	fuel: number;
	fuel_type: string;
	km: number;
	price: number;
	description: string;
	is_active: boolean;
	sold: boolean;
}
