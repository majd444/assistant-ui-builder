import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
const BotConfigurationSection = () => {
  const [botName, setBotName] = useState("Assistant");
  const [welcomeMessage, setWelcomeMessage] = useState("Hello! How can I help you today?");
  const [brandingText, setBrandingText] = useState("Powered by My Company");
  const [streamResponse, setStreamResponse] = useState(false);
  const [language, setLanguage] = useState("english");
  const [adaptToUser, setAdaptToUser] = useState(true);
  const [aiEngine, setAiEngine] = useState("chatgpt");
  const [prompt, setPrompt] = useState("");
  const [personality, setPersonality] = useState("friendly");
  const [randomSpeed, setRandomSpeed] = useState(false);
  const [timeZone, setTimeZone] = useState("UTC");
  const [location, setLocation] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [notificationType, setNotificationType] = useState("sms");
  return <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Create Your Chatbot</h2>
        <div className="space-y-6">
          {/* Chatbot Name */}
          <div className="space-y-2">
            <Label htmlFor="botName">Chatbot Name</Label>
            <Input id="botName" value={botName} onChange={e => setBotName(e.target.value)} placeholder="Enter chatbot name" />
          </div>
          
          {/* Welcome Message */}
          <div className="space-y-2">
            <Label htmlFor="welcomeMessage">Welcome Message</Label>
            <Textarea id="welcomeMessage" value={welcomeMessage} onChange={e => setWelcomeMessage(e.target.value)} placeholder="Enter welcome message" rows={3} />
          </div>
          
          {/* Branding Text */}
          
          
          {/* Stream AI Response */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Stream AI Response</h3>
              <p className="text-sm text-muted-foreground">Enable streaming text in AI response.</p>
            </div>
            <Switch checked={streamResponse} onCheckedChange={setStreamResponse} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Language Settings</h3>
        <div className="space-y-6">
          {/* Bot Language */}
          <div className="space-y-2">
            <Label htmlFor="language">Bot Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Adapt to User Language */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Adapt to User Language</h3>
              <p className="text-sm text-muted-foreground">Adapt to user's language after 1-2 messages in a different language</p>
            </div>
            <Switch checked={adaptToUser} onCheckedChange={setAdaptToUser} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">AI Module</h3>
        <div className="space-y-6">
          {/* AI Engine */}
          <div className="space-y-2">
            <Label htmlFor="aiEngine">AI Engine</Label>
            <Select value={aiEngine} onValueChange={setAiEngine}>
              <SelectTrigger>
                <SelectValue placeholder="Select AI engine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chatgpt">ChatGPT</SelectItem>
                <SelectItem value="gpt4">GPT-4</SelectItem>
                <SelectItem value="claude">Claude</SelectItem>
                <SelectItem value="llama">Llama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Prompt */}
          <div className="space-y-2">
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea id="prompt" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Instructions for how your chatbot should behave" rows={4} />
            <p className="text-sm text-muted-foreground">
              Instructions for how your chatbot should behave
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Personality & Tone</h3>
        <div className="space-y-6">
          {/* Personality */}
          <div className="space-y-2">
            <Label htmlFor="personality">Personality</Label>
            <Select value={personality} onValueChange={setPersonality}>
              <SelectTrigger>
                <SelectValue placeholder="Select personality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Random response speed */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Random response speed for each message</h3>
              <p className="text-sm text-muted-foreground">Vary response timing to appear more natural</p>
            </div>
            <Switch checked={randomSpeed} onCheckedChange={setRandomSpeed} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Time Zone </h3>
        <div className="space-y-6">
          {/* Time Zone */}
          <div className="space-y-2">
            <Label htmlFor="timeZone">Time Zone</Label>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger>
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="EST">EST</SelectItem>
                <SelectItem value="CST">CST</SelectItem>
                <SelectItem value="MST">MST</SelectItem>
                <SelectItem value="PST">PST</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Location */}
          
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Notifications</h3>
        <div className="space-y-6">
          {/* Enable notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Enable notifications</h3>
              <p className="text-sm text-muted-foreground">Send notifications for new messages</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          
          {/* Notification Type */}
          <div className="space-y-2">
            <Label>Notification Type</Label>
            <RadioGroup value={notificationType} onValueChange={setNotificationType} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sms" id="sms" />
                <Label htmlFor="sms">SMS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="push" id="push" />
                <Label htmlFor="push">Push Notification</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      
      <Button className="w-full mt-8">Save Configuration</Button>
    </div>;
};
export default BotConfigurationSection;