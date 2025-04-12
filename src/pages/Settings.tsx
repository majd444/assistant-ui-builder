
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import BotConfigurationSection from "@/components/settings/BotConfigurationSection";
import FineTuningSection from "@/components/settings/FineTuningSection";
import StyleConfigurationSection from "@/components/settings/StyleConfigurationSection";
import PluginsSection from "@/components/settings/PluginsSection";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("bot-configuration");

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Chatbot Settings</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="bot-configuration">Bot Configuration</TabsTrigger>
          <TabsTrigger value="fine-tuning">Fine Tuning</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="plugins">Plugins</TabsTrigger>
        </TabsList>
        
        <Card className="p-6">
          <TabsContent value="bot-configuration">
            <BotConfigurationSection />
          </TabsContent>
          
          <TabsContent value="fine-tuning">
            <FineTuningSection />
          </TabsContent>
          
          <TabsContent value="style">
            <StyleConfigurationSection />
          </TabsContent>
          
          <TabsContent value="plugins">
            <PluginsSection />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Settings;
