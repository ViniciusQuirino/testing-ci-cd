const users = [
	{
		name: "Anderson",
		email: "anderson@email.com",
		cpf: "11111111111",
		password: "1234",
		birth_date: "2001-10-10T00:00:00.000Z",
		phone_number: "11234567888",
		description: "teste",
		image_url:
			"https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg",
		is_seller: true,
	},
	{
		name: "Vinicius",
		email: "vinicius@email.com",
		cpf: "22222222222",
		password: "1234",
		birth_date: "2001-10-10T00:00:00.000Z",
		phone_number: "11234567111",
		description: "teste",
		image_url:
			"https://img.freepik.com/fotos-gratis/retrato-de-alegre-excitado-tablete-usuario-desgastar-oculos_1262-18272.jpg",
		is_seller: true,
	},
	{
		name: "Yasmin",
		email: "yasmin@email.com",
		cpf: "33333333333",
		password: "1234",
		birth_date: "2001-10-10T00:00:00.000Z",
		phone_number: "11234567222",
		description: "teste",
		image_url:
			"https://img.freepik.com/fotos-premium/confiante-mantendo-as-maos-nos-quadris_1187-380172.jpg",
		is_seller: true,
	},
	{
		name: "Enzo",
		email: "enzo@email.com",
		cpf: "44444444444",
		password: "1234",
		birth_date: "2001-10-10T00:00:00.000Z",
		phone_number: "11234567333",
		description: "teste",
		image_url: "teste",
		is_seller: true,
	},
	{
		name: "Leandro",
		cpf: "55555555555",
		email: "Leandro@email.com",
		password: "1234",
		phone_number: "11234567444",
		description: "teste",
		birth_date: "2001-10-10T00:00:00.000Z",
		image_url: "teste",
		is_seller: true,
	},
];

const address = {
	street: "teste",
	number: "12345",
	zip_code: "12345678",
	city: "teste",
	state: "teste",
};

const carsCitroen = [
	{
		brand: "Citroën",
		model: "C4 CACTUS FEEL Pack 1.6 16V Flex Aut.",
		launch_year: 2022,
		price: 112183,
		fuel_type: "Flex",
		car_color: "Branco",
		description: "Um carro compacto e moderno da Citroën",
		km: 2500,
	},
	{
		brand: "Citroën",
		model: "C4 CACTUS SHINE 1.6 16V Flex Aut.",
		launch_year: 2022,
		price: 120695,
		fuel_type: "Flex",
		car_color: "Azul",
		description: "Um carro compacto e moderno da Citroën",
		km: 3000,
	},
	{
		brand: "Citroën",
		model: "C4 Picasso Intensive 1.6 Turbo 16V Aut.",
		launch_year: 2019,
		price: 122860,
		fuel_type: "Flex",
		car_color: "Vermelho",
		description: "Um carro espaçoso e luxuoso da Citroën",
		km: 35690,
	},
];

const imagesCitroen = [
	{
		main_image: "https://img2.icarros.com/dbimg/imgmodelo/4/2762_8.jpg",
		image_one: "https://img2.icarros.com/dbimg/imgmodelo/4/2762_8.jpg",
		image_two: "https://img2.icarros.com/dbimg/imgmodelo/4/2762_8.jpg",
		image_three: "https://img2.icarros.com/dbimg/imgmodelo/4/2762_8.jpg",
	},
	{
		main_image:
			"https://www.autoo.com.br/fotos/2018/8/1280_960/citroen_c4-cactus_2019_1_30082018_10476_1280_960.jpg",
		image_one:
			"https://www.autoo.com.br/fotos/2018/8/1280_960/citroen_c4-cactus_2019_1_30082018_10476_1280_960.jpg",
		image_two:
			"https://www.autoo.com.br/fotos/2018/8/1280_960/citroen_c4-cactus_2019_1_30082018_10476_1280_960.jpg",
		image_three:
			"https://www.autoo.com.br/fotos/2018/8/1280_960/citroen_c4-cactus_2019_1_30082018_10476_1280_960.jpg",
	},
	{
		main_image:
			"https://mkt.carrera.com.br/stock-images/48287-01-325277.jpg?withwebp",
		image_one:
			"https://mkt.carrera.com.br/stock-images/48287-01-325277.jpg?withwebp",
		image_two:
			"https://mkt.carrera.com.br/stock-images/48287-01-325277.jpg?withwebp",
		image_three:
			"https://mkt.carrera.com.br/stock-images/48287-01-325277.jpg?withwebp",
	},
];

const carsFiat = [
	{
		brand: "Fiat",
		model: "MOBI TREKKING 1.0 Flex 5p.",
		launch_year: 2022,
		price: 68267,
		fuel_type: "Flex",
		car_color: "Vermelho",
		description: "Um carro compacto e ideal para cidade",
		km: 10000,
	},
	{
		brand: "Fiat",
		model: "Strada Freedom 1.3 Flex 8V CD",
		launch_year: 2022,
		price: 110706,
		fuel_type: "Flex",
		car_color: "Cinza",
		description: "Uma picape ideal para trabalho",
		km: 5000,
	},
	{
		brand: "Fiat",
		model: "Grand Siena ATTRAC. 1.4 EVO F.Flex 8V",
		launch_year: 2021,
		price: 61382,
		fuel_type: "Flex",
		car_color: "Cinza",
		description: "Um carro espaçoso e confortável",
		km: 20000,
	},
];

const imagesFiat = [
	{
		main_image:
			"https://image1.mobiauto.com.br/images/api/images/v1.0/52392613/transform/fl_progressive,f_webp,q_95",
		image_one:
			"https://s3.agsistema.net/5677/vehicles/1266889/photos/IbZlStB9rte38T5k18GSASPd1aqBLLygTlPV.jpg?partner=dealersites",
		image_two:
			"https://s3.agsistema.net/5677/vehicles/1266889/photos/IbZlStB9rte38T5k18GSASPd1aqBLLygTlPV.jpg?partner=dealersites",
		image_three:
			"https://s3.agsistema.net/5677/vehicles/1266889/photos/IbZlStB9rte38T5k18GSASPd1aqBLLygTlPV.jpg?partner=dealersites",
	},
	{
		main_image:
			"https://http2.mlstatic.com/D_NQ_NP_631071-MLB49935079995_052022-O.jpg",
		image_one:
			"https://http2.mlstatic.com/D_NQ_NP_631071-MLB49935079995_052022-O.jpg",
		image_two:
			"https://http2.mlstatic.com/D_NQ_NP_631071-MLB49935079995_052022-O.jpg",
		image_three:
			"https://http2.mlstatic.com/D_NQ_NP_631071-MLB49935079995_052022-O.jpg",
	},
	{
		main_image:
			"https://img2.icarros.com/dbimg/galeriaimgmodelo/2/106586_1.jpg",
		image_one:
			"https://img2.icarros.com/dbimg/galeriaimgmodelo/2/106586_1.jpg",
		image_two:
			"https://img2.icarros.com/dbimg/galeriaimgmodelo/2/106586_1.jpg",
		image_three:
			"https://img2.icarros.com/dbimg/galeriaimgmodelo/2/106586_1.jpg",
	},
];

const carsFord = [
	{
		brand: "Ford",
		model: "Fiesta SE Style 1.6 16V Flex Mec. 5p",
		launch_year: 2019,
		price: 61120,
		fuel_type: "Flex",
		car_color: "Vermelho",
		description: "Um carro compacto e confortável da Ford",
		km: 41500,
	},
	{
		brand: "Ford",
		model: "Ranger XLT 2.5 16V 4x2 CD Flex",
		launch_year: 2019,
		price: 145680,
		fuel_type: "Flex",
		car_color: "Azul",
		description: "Uma caminhonete espaçosa e resistente da Ford",
		km: 72000,
	},
	{
		brand: "Ford",
		model: "Ka 1.0 S TiVCT Flex 5p",
		launch_year: 2021,
		price: 56300,
		fuel_type: "Flex",
		car_color: "Preto",
		description: "Um carro compacto e econômico da Ford",
		km: 11000,
	},
];

const imagesFord = [
	{
		main_image:
			"https://image1.mobiauto.com.br/images/api/images/v1.0/52392613/transform/fl_progressive,f_webp,q_95",
		image_one:
			"https://image1.mobiauto.com.br/images/api/images/v1.0/52392613/transform/fl_progressive,f_webp,q_95",
		image_two:
			"https://image1.mobiauto.com.br/images/api/images/v1.0/52392613/transform/fl_progressive,f_webp,q_95",
		image_three:
			"https://image1.mobiauto.com.br/images/api/images/v1.0/52392613/transform/fl_progressive,f_webp,q_95",
	},
	{
		main_image:
			"https://img0.icarros.com/dbimg/galeriaimgmodelo/2/10145_1.jpg",
		image_one:
			"https://img0.icarros.com/dbimg/galeriaimgmodelo/2/10145_1.jpg",
		image_two:
			"https://img0.icarros.com/dbimg/galeriaimgmodelo/2/10145_1.jpg",
		image_three:
			"https://img0.icarros.com/dbimg/galeriaimgmodelo/2/10145_1.jpg",
	},
	{
		main_image:
			"https://motos-motor.com.br/c/wp-content/uploads/33/precos-tabela-ford-ka-10-s-tivct-flex-5p.jpg",
		image_one:
			"https://motos-motor.com.br/c/wp-content/uploads/33/precos-tabela-ford-ka-10-s-tivct-flex-5p.jpg",
		image_two:
			"https://motos-motor.com.br/c/wp-content/uploads/33/precos-tabela-ford-ka-10-s-tivct-flex-5p.jpg",
		image_three:
			"https://motos-motor.com.br/c/wp-content/uploads/33/precos-tabela-ford-ka-10-s-tivct-flex-5p.jpg",
	},
];

import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
const prisma = new PrismaClient();

async function main() {
	const anderson = await prisma.user.upsert({
		where: { email: users[0].email },
		update: {},
		create: {
			...users[0],
			password: hashSync(users[0].password, 10),
			address: {
				create: {
					...address,
				},
			},
			cars: {
				create: [
					{
						...carsCitroen[0],
						images: {
							create: {
								...imagesCitroen[0],
							},
						},
					},
					{
						...carsCitroen[1],
						images: {
							create: {
								...imagesCitroen[1],
							},
						},
					},
					{
						...carsCitroen[2],
						images: {
							create: {
								...imagesCitroen[2],
							},
						},
					},
				],
			},
		},
	});

	const vinicius = await prisma.user.upsert({
		where: { email: users[1].email },
		update: {},
		create: {
			...users[1],
			password: hashSync(users[1].password, 10),
			address: {
				create: {
					...address,
				},
			},
			cars: {
				create: [
					{
						...carsFiat[0],
						images: {
							create: {
								...imagesFiat[0],
							},
						},
					},
					{
						...carsFiat[1],
						images: {
							create: {
								...imagesFiat[1],
							},
						},
					},
					{
						...carsFiat[2],
						images: {
							create: {
								...imagesFiat[2],
							},
						},
					},
				],
			},
		},
	});

	const yasmim = await prisma.user.upsert({
		where: { email: users[2].email },
		update: {},
		create: {
			...users[2],
			password: hashSync(users[2].password, 10),
			address: {
				create: {
					...address,
				},
			},
			cars: {
				create: [
					{
						...carsFord[0],
						images: {
							create: {
								...imagesFord[0],
							},
						},
					},
					{
						...carsFord[1],
						images: {
							create: {
								...imagesFord[1],
							},
						},
					},
					{
						...carsFord[2],
						images: {
							create: {
								...imagesFord[2],
							},
						},
					},
				],
			},
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
