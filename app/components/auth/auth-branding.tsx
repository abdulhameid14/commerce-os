"use client";

import { motion } from "framer-motion";
import {
    DollarSign,
    ShoppingCart,
    Package,
    Users,
} from "lucide-react";

function MetricCard({
    title,
    value,
    icon: Icon,
}: {
    title: string;
    value: string;
    icon: any;
}) {
    return (
        <div
            className="
      rounded-2xl
      border border-slate-800
      bg-slate-900/50
      p-4
      backdrop-blur-sm
    "
        >
            <div className="mb-3 flex items-center justify-between">
                <Icon
                    size={18}
                    className="text-blue-400"
                />

                <span className="text-[10px] text-emerald-400">
                    +12%
                </span>
            </div>

            <p className="text-xs text-slate-400">
                {title}
            </p>

            <h4 className="mt-1 text-lg font-semibold text-white">
                {value}
            </h4>
        </div>
    );
}

export function AuthBranding() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -30,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className="
        hidden
        lg:flex

        flex-col
        justify-between

        h-full
        max-w-xl
      "
        >
            <div>
                <div
                    className="
          inline-flex
          items-center
          gap-2

          rounded-full
          border border-slate-800

          px-4
          py-2

          text-sm
          text-slate-300
        "
                >
                    <div className="h-2 w-2 rounded-full bg-blue-500" />

                    CommerceOS
                </div>

                <h1
                    className="
          mt-8

          text-5xl
          font-bold
          leading-tight
          text-white
        "
                >
                    Run your ecommerce operations
                    from one dashboard.
                </h1>

                <p
                    className="
          mt-5

          max-w-lg

          text-lg
          text-slate-400
        "
                >
                    Manage products, orders,
                    inventory and analytics with
                    CommerceOS.
                </p>
            </div>

            {/* Dashboard Preview */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.2,
                }}
                className="
          mt-12

          rounded-3xl
          border border-slate-800

          bg-slate-900/40

          p-6

          backdrop-blur-sm
        "
            >
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-500">
                            Overview
                        </p>

                        <h3 className="text-lg font-semibold text-white">
                            Store Performance
                        </h3>
                    </div>

                    <div
                        className="
            rounded-lg
            bg-blue-500/10

            px-3
            py-1

            text-xs
            text-blue-400
          "
                    >
                        Live
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <MetricCard
                        title="Revenue"
                        value="$12.4K"
                        icon={DollarSign}
                    />

                    <MetricCard
                        title="Orders"
                        value="1,248"
                        icon={ShoppingCart}
                    />

                    <MetricCard
                        title="Inventory"
                        value="324"
                        icon={Package}
                    />

                    <MetricCard
                        title="Customers"
                        value="842"
                        icon={Users}
                    />
                </div>
            </motion.div>

            {/* Trust Metrics */}
            <div
                className="
        mt-10

        flex
        flex-wrap
        gap-4
      "
            >
                <div
                    className="
          rounded-xl
          border border-slate-800

          px-4
          py-3
        "
                >
                    <div className="text-xl font-bold text-white">
                        500+
                    </div>

                    <div className="text-xs text-slate-400">
                        Stores
                    </div>
                </div>

                <div
                    className="
          rounded-xl
          border border-slate-800

          px-4
          py-3
        "
                >
                    <div className="text-xl font-bold text-white">
                        2M+
                    </div>

                    <div className="text-xs text-slate-400">
                        Orders Processed
                    </div>
                </div>

                <div
                    className="
          rounded-xl
          border border-slate-800

          px-4
          py-3
        "
                >
                    <div className="text-xl font-bold text-white">
                        99.9%
                    </div>

                    <div className="text-xs text-slate-400">
                        Uptime
                    </div>
                </div>
            </div>
        </motion.div>
    );
}