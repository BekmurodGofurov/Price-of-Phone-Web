const app = Vue.createApp({

	data() {
		return {
			title: "Yangi ma'lumotni qo'shish uchun.",
			dokanNnomi: '',
			nomi: '',
			rangi: '',
			xotira: '',
			boshlangichTolov: "",
			malumot: '',

			asl: '',

			oy1: '',
			oy1Tolov: "",
			oy1Jami: "",
			oy1Farq: '',
			oy1Foiz: '',

			oy2: '',
			oy2Tolov: '',
			oy2Jami: '',
			oy2Farq: '',
			oy2Foiz: '',

			oy3: '',
			oy3Tolov: '',
			oy3Jami: '',
			oy3Farq: '',
			oy3Foiz: '',

			users: [
				{ id: 1, dokanNnomi: "Malika", nomi: '15 Pro', rangi: 'Black', xotira: "256 GB", boshlangichTolov: "500$", asl: "1100$", oy1: '3 oy', oy1Tolov: '220$', oy1Jami: '1160$', oy1Farq: '60$', oy1Foiz: '5%', oy2: '6 oy', oy2Tolov: '120$', oy2Jami: '1220$', oy2Farq: '120$', oy2Foiz: '10%', oy3: '9 oy', oy3Tolov: '90$', oy3Jami: '1310$', oy3Farq: '210$', oy3Foiz: '19%', malumot: 'free case' },
			],

			errorHandler: "",
			error: false,
			handleUerId: null,
		}
	},

	methods: {

		addUser() {
			if (this.handleUerId != null) {
				let findUserById = this.users.find((user) => user.id == this.handleUerId)
				findUserById.dokanNnomi = this.dokanNnomi
				findUserById.nomi = this.nomi
				findUserById.rangi = this.rangi
				findUserById.xotira = this.xotira
				findUserById.boshlangichTolov = Number(this.boshlangichTolov) + "$",
				findUserById.asl = this.asl + "$",
				findUserById.oy1 = Number(this.oy1) + " oy",
				findUserById.oy1Tolov = Number(this.oy1Tolov) + "$",
				findUserById.oy1Jami= this.oy1 * this.oy1Tolov + this.boshlangichTolov + "$",
				findUserById.oy1Farq= (this.oy1 * this.oy1Tolov + this.boshlangichTolov) - this.asl + "$",
				findUserById.oy1Foiz= (((this.oy1 * this.oy1Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',

				findUserById.oy2 = Number(this.oy2) + " oy",
				findUserById.oy2Tolov = Number(this.oy2Tolov) + "$",
				findUserById.oy2Jami= this.oy2 * this.oy2Tolov + this.boshlangichTolov + "$",
				findUserById.oy2Farq= (this.oy2 * this.oy2Tolov + this.boshlangichTolov) - this.asl + "$",
				findUserById.oy2Foiz= (((this.oy2 * this.oy2Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',
				
				findUserById.oy3 = Number(this.oy3) + " oy",
				findUserById.oy3Tolov = Number(this.oy3Tolov) + "$",
				findUserById.oy3Jami= this.oy3 * this.oy3Tolov + this.boshlangichTolov + "$",
				findUserById.oy3Farq= (this.oy3 * this.oy3Tolov + this.boshlangichTolov) - this.asl + "$",
				findUserById.oy3Foiz= (((this.oy3 * this.oy3Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',
				
				findUserById.malumot = this.malumot

				this.dokanNnomi = ''
				this.nomi = ''
				this.rangi = ''
				this.xotira = ''
				this.boshlangichTolov = ''
				this.asl = ''

				this.oy1 = ''
				this.oy1Tolov = ''
				this.oy1Jami = ''
				this.oy1Farq = ''
				this.oy1Foiz = ''

				this.oy2 = ''
				this.oy2Tolov = ''
				this.oy2Jami = ''
				this.oy2Farq = ''
				this.oy2Foiz = ''

				this.oy3 = ''
				this.oy3Tolov = ''
				this.oy3Jami = ''
				this.oy3Farq = ''
				this.oy3Foiz = ''
				this.malumot = ''
				this.error = false
				console.log(this.handleUerId + " id's old data is cleaned");
				console.log(this.handleUerId + " id is edited");

			}

			else if (this.dokanNnomi && this.nomi && this.rangi && this.xotira && this.boshlangichTolov && this.oy1 && this.oy1Tolov && this.oy2 && this.oy2Tolov && this.oy3 && this.oy3Tolov && this.asl && this.malumot) {
				let newUser = {
					id: this.users.length + 1,
					dokanNnomi: this.dokanNnomi,
					nomi: this.nomi,
					rangi: this.rangi,
					xotira: this.xotira,
					boshlangichTolov: Number(this.boshlangichTolov) + "$",
					asl: this.asl + "$",

					oy1: Number(this.oy1) + " oy",
					oy1Tolov: Number(this.oy1Tolov) + "$",
					oy1Jami: this.oy1 * this.oy1Tolov + this.boshlangichTolov + "$",
					oy1Farq: (this.oy1 * this.oy1Tolov + this.boshlangichTolov) - this.asl + "$",
					oy1Foiz: (((this.oy1 * this.oy1Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',

					oy2: Number(this.oy2) + " oy",
					oy2Tolov: Number(this.oy2Tolov) + "$",
					oy2Jami: this.oy2 * this.oy2Tolov + this.boshlangichTolov + "$",
					oy2Farq: (this.oy2 * this.oy2Tolov + this.boshlangichTolov) - this.asl + "$",
					oy2Foiz: (((this.oy2 * this.oy2Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',

					oy3: Number(this.oy3) + " oy",
					oy3Tolov: Number(this.oy3Tolov) + "$",
					oy3Jami: this.oy3 * this.oy3Tolov + this.boshlangichTolov + "$",
					oy3Farq: (this.oy3 * this.oy3Tolov + this.boshlangichTolov) - this.asl + "$",
					oy3Foiz: (((this.oy3 * this.oy3Tolov + this.boshlangichTolov) - this.asl) / this.asl * 100).toFixed(1) + '%',
					malumot: this.malumot
				}
				this.users.push(newUser)
				this.dokanNnomi = ''
				this.nomi = ''
				this.rangi = ''
				this.xotira = ''
				this.boshlangichTolov = ''
				this.asl = ''

				this.oy1 = ''
				this.oy1Tolov = ''
				this.oy1Jami = ''
				this.oy1Farq = ''
				this.oy1Foiz = ''

				this.oy2 = ''
				this.oy2Tolov = ''
				this.oy2Jami = ''
				this.oy2Farq = ''
				this.oy2Foiz = ''

				this.oy3 = ''
				this.oy3Tolov = ''
				this.oy3Jami = ''
				this.oy3Farq = ''
				this.oy3Foiz = ''
				this.malumot = ''
				this.error = false
				console.log("New Data is added");
			}
			else {
				this.error = true
				this.errorHandler = "Iltimos ma'lumotlarni to'liq to'ldirib chiqing!"
				console.log("Data is not entered full!");
			}
		},

		deleteData(id) {
			this.users = this.users.filter((user) => user.id != id);
				this.error = false
				console.log(id + " id is deleted");
		},

		editData(id) {
			let findUserById = this.users.find((user) => user.id == id)

			this.dokanNnomi = findUserById.dokanNnomi;
			this.nomi = findUserById.nomi;
			this.rangi = findUserById.rangi;
			this.xotira = findUserById.xotira;
			this.boshlangichTolov = parseFloat(findUserById.boshlangichTolov);
			this.asl = parseFloat(findUserById.asl);
			this.oy1 = parseFloat(findUserById.oy1)
			this.oy1Tolov = parseFloat(findUserById.oy1Tolov);
			
			this.oy2 = parseFloat(findUserById.oy2);
			this.oy2Tolov = parseFloat(findUserById.oy2Tolov);

			this.oy3 = parseFloat(findUserById.oy3);
			this.oy3Tolov = parseFloat(findUserById.oy3Tolov);

			this.malumot = findUserById.malumot;
			this.handleUerId = id

			console.log("Edit button is clicked");
		}
	},
}).mount('#main')