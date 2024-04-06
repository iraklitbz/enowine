<script setup>
    const loading = ref(false);
    const errorOnSendStarpi = ref(false);
    const error = ref(false);
    const errorBankAccount = ref(false);
    const errorBankAccountMessage = ref("")
    const userModel = ref({
        name: "",
        surname: "",
        dni: "",
        direccion: "",
        cp: "",
        localidad: "",
        banco: "",
        cuenta: "",
        phone: "",
        email: ""
    });
    const formFields = ref([
        {
            name: "name",
            label: "Nombre",
            type: "text",
            placeholder: "Jon",
            class: "col-span-12 md:col-span-6"
        },
        {
            name: "surname",
            label: "Apellidos",
            type: "text",
            placeholder: "Nieve",
            class: "col-span-12 md:col-span-6"
        },
        {
            name: "dni",
            label: "DNI",
            type: "text",
            placeholder: "00000000E",
            class: "col-span-12 md:col-span-4"
        },
        {
            name: "direccion",
            label: "Dirección",
            type: "text",
            placeholder: "Preferiblemente en Jadraque",
            class: "col-span-12 md:col-span-8"
        },
        {
            name: "cp",
            label: "Código postal",
            type: "number",
            placeholder: "19240",
            class: "col-span-4 md:col-span-6"
        },
        {
            name: "localidad",
            label: "Localidad",
            type: "text",
            placeholder: "Jadraque",
            class: "col-span-8 md:col-span-6"
        },
        {
            name: "banco",
            label: "Nombre de banco",
            type: "text",
            placeholder: "Caixa, Santander, etc",
            class: "col-span-12 md:col-span-6"
        },
        {
            name: "cuenta",
            label: "Número de cuenta",
            type: "text",
            placeholder: "ES00 0000 0000 0000 0000 0000",
            class: "col-span-12 md:col-span-6"
        },
        {
            name: "phone",
            label: "Teléfono móvil",
            type: "tel",
            placeholder: "600000000",
            class: "col-span-12 md:col-span-6"
        },
        {
            name: "email",
            label: "Correo electrónico",
            type: "email",
            placeholder: "jon@gmail.com",
            class: "col-span-12 md:col-span-6"
        }
    ])
    
    const HandleSendEmail = async () => {
      checkBankAccount()
      if (!errorBankAccount.value) {
          const variables = {
          nombre: userModel.value.name,
          apellidos: userModel.value.surname,
          DNI: userModel.value.dni,
          direccion: userModel.value.direccion,
          postal: userModel.value.cp,
          localidad: userModel.value.localidad,
          banco: userModel.value.banco,
          cuenta: userModel.value.cuenta,
          telefono: userModel.value.phone,
          email: userModel.value.email
        }
        const sendData = await createSocio(variables).catch((err) => {
            errorOnSendStarpi.value = true
        })
        if(sendData) {
            loading.value = true;
            let msg = {
                from: 'web@reconquistajadraque.es',
                to: 'asoc.reconquista.jadraque@gmail.com',
                subject:  `Solicitud socio de ${userModel.value.name} ${userModel.value.surname}`,
                html:  `<p>${userModel.value.name} ${userModel.value.surname} quiere formar parte de la reconquista! estos son sus datos:</p><br>
                        <ul>
                            <li>Nombre: <b>${userModel.value.name}</b></li>
                            <li>Apellidos: <b>${userModel.value.surname}</b></li>
                            <li>DNI: <b>${userModel.value.dni}</b></li>
                            <li>Dirección: <b>${userModel.value.direccion}</b></li>
                            <li>Código postal: <b>${userModel.value.cp}</b></li>
                            <li>Localidad: <b>${userModel.value.localidad}</b></li>
                            <li>Nombre de banco: <b>${userModel.value.banco}</b></li>
                            <li>Número de cuenta: <b>${userModel.value.cuenta}</b></li>
                            <li>Teléfono móvil: <b>${userModel.value.phone}</b></li>
                            <li>Correo electrónico: <b>${userModel.value.email}</b></li>
                        </ul>
                `
            }
            const { data } = await useFetch("/api/send", {
                method: "POST",
                body: msg
            });
            if(!data.value.error) {
                loading.value = false;
                error.value = false
                userModel.value = {
                    name: "",
                    surname: "",
                    dni: "",
                    direccion: "",
                    cp: "",
                    localidad: "",
                    banco: "",
                    cuenta: "",
                    phone: "",
                    email: ""
                }
                navigateTo("/thanks")
            } else {
                loading.value = false;
                error.value = true
            }
        }
      }
    }
    const checkBankAccount = () => {
      errorBankAccount.value = false;
      let value = userModel.value.cuenta.toUpperCase();
      value = value.replace(/[^A-Z0-9]/g, '');

      // Check if it starts with 'ES'
      if (!/^ES/.test(value)) {
        errorBankAccount.value = true;
        errorBankAccountMessage.value = 'La cuenta bancaria debe comenzar con "ES".';
        return;
      }

      // Check if it has exactly 24 characters
      if (value.length !== 24) {
        errorBankAccount.value = true;
        errorBankAccountMessage.value = 'La cuenta bancaria debe tener exactamente 24 caracteres';
        return;
      }

      // Check if the remaining characters are numeric
      if (!/^\d{22}$/.test(value.slice(2))) {
        errorBankAccount.value = true;
        errorBankAccountMessage.value = 'Los caracteres después de "ES" deben ser todos números.';
        return;
      }
      userModel.value.cuenta = value;
    };
</script>
<template>
      <section>
        <div
          class="max-w-4xl m-auto mb-10"
        >
        </div>
        <form 
          @submit.prevent="HandleSendEmail" 
          class="grid grid-cols-12 gap-4 max-w-4xl m-auto"
        >
              <div
                v-for="field in formFields"
                :key="field.name"
                :class="field.class"
              >
                <label
                  class="block font-medium leading-6 text-md text-slate-900"
                  :for="field.name"
                >
                  {{ field.label }}
                </label>
                <input
                  v-model="userModel[field.name]" 
                  :type="field.type" 
                  :name="field.name" 
                  :min="field.type === 'number' ? 0 : null"
                  :max="field.type === 'number' ? 99999 : null"
                  :placeholder="field.placeholder"
                  :id="field.name" 
                  class="block w-full px-4 py-4 leading-4 transition-colors duration-200 ease-in-out border-0 shadow-sm rounded-xl bg-slate-50 text-md text-slate-900 shadow-sky-100/50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600/60"
                  required
                />
              </div>
              <div
                class="col-span-12 pt-8 mt-10 border-t border-slate-200"
              >
                  <button 
                    type="submit"
                    class="inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none bg-slate-900 text-white hover:bg-sky-800 w-full text-base sm:text-lg"
                  >
                    <span
                      v-if="!loading"
                    >
                      Hazte socio!
                    </span>
                    <div
                      v-else
                      class="inline-flex items-center justify-center"
                      role="status">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Enviando...</span>
                    </div>
                  </button>
                  <p
                    v-if="error || errorBankAccount"
                    class="text-red-500 text-center mt-2"
                  >
                    {{
                      error
                        ? "Ha habido un error al enviar el formulario, por favor, inténtalo de nuevo."
                        : errorBankAccountMessage
                    }}
                  </p>
              </div>

            </form>
            
      </section>
</template>