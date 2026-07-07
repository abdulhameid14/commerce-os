"use client";

interface Activity {
    id: string;
    title: string;
    date: string;
}

interface CustomerActivityTimelineProps {
    activities: Activity[];
}

export function CustomerActivityTimeline({
    activities,
}: CustomerActivityTimelineProps) {
    return (
        <div className="mt-8">
            <h3 className="mb-5 text-lg font-semibold text-white">
                Activity Timeline
            </h3>

            <div className="relative ml-2 border-l border-slate-800">
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="relative mb-6 pl-6"
                    >
                        <div
                            className="
              absolute
              -left-[7px]
              top-1

              h-3
              w-3

              rounded-full

              bg-blue-500
              "
                        />

                        <p className="font-medium text-white">
                            {activity.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {activity.date}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}