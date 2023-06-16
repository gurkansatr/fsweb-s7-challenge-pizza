import * as Yup from "yup";

const siparisSchema = Yup.object().shape({
    isim: Yup.string().min(2,"İsim en az 2 karakter olmalıdır"),
    not: Yup.string()
})

export default siparisSchema