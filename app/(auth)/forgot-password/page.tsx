import { AuthCard } from "../../components/auth/auth-card";
import { AuthLayout } from "../../components/auth/auth-layout";
import { ForgotPasswordForm } from "../../features/auth/forms/forgot-password-form";

export default function ForgotPasswordPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <ForgotPasswordForm />
            </AuthCard>
        </AuthLayout>
    );
}