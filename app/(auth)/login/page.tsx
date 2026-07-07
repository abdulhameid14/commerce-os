import { LoginForm } from "../../features/auth/forms/login-form";
import { AuthCard } from "../../components/auth/auth-card";
import { AuthLayout } from "../../components/auth/auth-layout";

export default function LoginPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <LoginForm />
            </AuthCard>
        </AuthLayout>
    );
}