import { AuthCard } from "./../../components/auth/auth-card";
import { AuthLayout } from "./../../components/auth/auth-layout";
import { OtpForm } from "../../features/auth/forms/otp-form";

export default function VerifyOtpPage() {
    return (
        <AuthLayout>
            <AuthCard>
                <OtpForm />
            </AuthCard>
        </AuthLayout>
    );
}