import { AuthCard } from "../../components/auth/auth-card";
import { AuthLayout } from "../../components/auth/auth-layout";
import { RegisterForm } from "../../features/auth/forms/register-form";

export default function RegisterPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <RegisterForm />
            </AuthCard>
        </AuthLayout>
    );
}