import { Heading } from "@/components/heading";
import { SubscriptionButtonProps } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground pt-4 text-sm">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan"}
        </div>
        <SubscriptionButtonProps isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
