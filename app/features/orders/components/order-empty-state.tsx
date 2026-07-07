export function OrderEmptyState() {
    return (
        <div
            className="
      flex
      flex-col
      items-center
      justify-center

      rounded-2xl
      border
      border-dashed
      border-slate-800

      py-20
      text-center
      "
        >
            <h3 className="text-lg font-semibold text-white">
                No orders found
            </h3>

            <p className="mt-2 max-w-sm text-slate-400">
                Orders will appear here once customers
                start purchasing from your store.
            </p>
        </div>
    );
}