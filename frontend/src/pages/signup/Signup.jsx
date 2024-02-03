import SignupForm from "../../components/signupForm/SignupForm"
import { useTranslation } from "react-i18next"
export default function Signup(){
    const { t, i18n } = useTranslation();
    return(
        <>
            <h2>{t('registro')}</h2>
            <SignupForm></SignupForm>
        </>
    )
}