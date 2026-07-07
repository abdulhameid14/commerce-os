import { AuthCard } from "../../components/auth/auth-card";
import { AuthLayout } from "../../components/auth/auth-layout";
import { ResetPasswordForm } from "../../features/auth/forms/reset-password-form";

export default function ResetPasswordPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <ResetPasswordForm />
            </AuthCard>
        </AuthLayout>
    );
}