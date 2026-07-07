// src/app/(dashboard)/marketing/page.tsx

import { MarketingOverview } from "@/app/features/marketing/components/marketing-overview";
import { CouponsTable } from "@/app/features/marketing/components/coupons-table";
import { DiscountAnalytics } from "@/app/features/marketing/components/discount-analytics";
import { DiscountsTable } from "@/app/features/marketing/components/discounts-table";

import { CampaignsTable } from "@/app/features/marketing/components/campaigns-table";
import { EmailMarketingTable } from "@/app/features/marketing/components/email-marketing-table";
import { ReferralProgramTable } from "@/app/features/marketing/components/referral-program-table";
import { MarketingReportsTable } from "@/app/features/marketing/components/marketing-reports-table";

export default function MarketingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Marketing
                </h1>

                <p className="mt-2 text-slate-400">
                    Manage promotions, campaigns, referrals and marketing performance.
                </p>
            </div>

            <MarketingOverview />

            <CouponsTable />

            <DiscountAnalytics />

            <DiscountsTable />

            <CampaignsTable />

            <EmailMarketingTable />

            <ReferralProgramTable />

            <MarketingReportsTable />
        </div>
    );
}