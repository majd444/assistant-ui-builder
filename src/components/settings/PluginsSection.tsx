
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  Search, 
  MapPin, 
  Globe, 
  Mail, 
  ShoppingCart, 
  Image as ImageIcon,
  FileText,
  Database,
  PlusCircle
} from "lucide-react";

interface Plugin {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  configurable: boolean;
  apiKey?: string;
}

const PluginsSection = () => {
  const [plugins, setPlugins] = useState<Plugin[]>([
    {
      id: "1",
      name: "Calendar Integration",
      description: "Allow your chatbot to check and manage calendar events",
      icon: <Calendar className="h-6 w-6" />,
      enabled: false,
      configurable: true
    },
    {
      id: "2",
      name: "Search Engine",
      description: "Enable web search capabilities for real-time information",
      icon: <Search className="h-6 w-6" />,
      enabled: true,
      configurable: true,
      apiKey: "sk_test_abcdefg"
    },
    {
      id: "3",
      name: "Location Services",
      description: "Provide location-based recommendations and information",
      icon: <MapPin className="h-6 w-6" />,
      enabled: false,
      configurable: true
    },
    {
      id: "4",
      name: "Language Translation",
      description: "Translate messages between different languages",
      icon: <Globe className="h-6 w-6" />,
      enabled: true,
      configurable: false
    },
    {
      id: "5",
      name: "Email Integration",
      description: "Send emails directly from the chat interface",
      icon: <Mail className="h-6 w-6" />,
      enabled: false,
      configurable: true
    },
    {
      id: "6",
      name: "E-commerce",
      description: "Allow product browsing and purchasing",
      icon: <ShoppingCart className="h-6 w-6" />,
      enabled: false,
      configurable: true
    },
    {
      id: "7",
      name: "Image Generation",
      description: "Generate images based on text descriptions",
      icon: <ImageIcon className="h-6 w-6" />,
      enabled: false,
      configurable: true
    },
    {
      id: "8",
      name: "Document Processing",
      description: "Extract information from uploaded documents",
      icon: <FileText className="h-6 w-6" />,
      enabled: true,
      configurable: false
    },
    {
      id: "9",
      name: "Knowledge Base",
      description: "Connect to an external knowledge base or database",
      icon: <Database className="h-6 w-6" />,
      enabled: false,
      configurable: true
    }
  ]);

  const [configuring, setConfiguring] = useState<string | null>(null);

  const togglePlugin = (id: string) => {
    setPlugins(plugins.map(plugin => 
      plugin.id === id ? { ...plugin, enabled: !plugin.enabled } : plugin
    ));
  };

  const updateApiKey = (id: string, apiKey: string) => {
    setPlugins(plugins.map(plugin => 
      plugin.id === id ? { ...plugin, apiKey } : plugin
    ));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Plugins</h2>
        <p className="text-muted-foreground mb-6">
          Extend your chatbot's capabilities with these powerful plugins.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {plugins.map(plugin => (
          <div key={plugin.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  {plugin.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{plugin.name}</h3>
                  <p className="text-muted-foreground">{plugin.description}</p>
                  
                  {configuring === plugin.id && plugin.configurable && (
                    <div className="mt-4 space-y-2">
                      <Label htmlFor={`apiKey-${plugin.id}`}>API Key</Label>
                      <div className="flex gap-2">
                        <Input 
                          id={`apiKey-${plugin.id}`} 
                          value={plugin.apiKey || ''} 
                          onChange={(e) => updateApiKey(plugin.id, e.target.value)}
                          placeholder="Enter API key"
                          type="password"
                        />
                        <Button 
                          variant="outline" 
                          onClick={() => setConfiguring(null)}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {plugin.configurable && configuring !== plugin.id && (
                  <Button 
                    variant="ghost" 
                    onClick={() => setConfiguring(plugin.id)}
                    disabled={!plugin.enabled}
                  >
                    Configure
                  </Button>
                )}
                <Switch 
                  checked={plugin.enabled} 
                  onCheckedChange={() => togglePlugin(plugin.id)} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full flex items-center justify-center gap-2 mt-6">
        <PlusCircle className="h-4 w-4" />
        Add Custom Plugin
      </Button>

      <Button className="w-full mt-8">Save Plugin Configuration</Button>
    </div>
  );
};

export default PluginsSection;
