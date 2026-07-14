"use client";

import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "../services/analytics.service";
import { analyticsKeys } from "../services/analytics.keys";

export function useAnalytics() {
    return useQuery({
        queryKey: analyticsKeys.overview(),
        queryFn: analyticsService.getOverview,
    });
}