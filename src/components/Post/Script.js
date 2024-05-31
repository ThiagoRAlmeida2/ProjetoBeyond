import { db } from "@/service/firebase";

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        drawer: null,
        headers: [
            {
                text: "Título",
                align: "start",
                sortable: false,
                value: "name",
            },
            { text: "Autor", value: "autor" },
            { text: "Assunto Abordado", value: "assunto" },
            { text: "Área de Ensino", value: "ensino" },
            { text: "Tipo do conteúdo", value: "conteudo" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        conteudos: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            autor: "",
            assunto: "",
            ensino: "",
            conteudo: "",
        },
        defaultItem: {
            name: "",
            autor: "",
            assunto: "",
            ensino: "",
            conteudo: "",
        },

        menuItems: [
            {
                icon: "mdi-home",
                title: "Home",
                href: "#",
                iconSize: "40px",
                titleSize: "17px",
            },
            {
                icon: "mdi-library",
                title: "Biblioteca",
                href: "#",
                iconSize: "40px",
                titleSize: "17px",
            },
            {
                icon: "mdi-account",
                title: "User",
                href: "#",
                iconSize: "40px",
                titleSize: "17px",
            },
            {
                icon: "mdi-book",
                title: "Cursos",
                href: "#",
                iconSize: "40px",
                titleSize: "17px",
            },
        ],
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
    created() {
        db.collection("Conteudo")
            .get()
            .then((querySnapshot) => {
                console.log("Número de documentos:", querySnapshot.size);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch((error) => {
                console.error("Erro ao obter documentos:", error);
            });
    },

    methods: {
        deslogar() {
            localStorage.removeItem("authToken");
            this.$router.push({ path: "/" });
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        },
    },
};
