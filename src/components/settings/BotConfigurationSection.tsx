import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { PlusCircle, X, Edit } from "lucide-react";

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
  const [preConversationInputs, setPreConversationInputs] = useState([
    { id: 1, label: "Name", placeholder: "Please enter your name", required: true }
  ]);
  const [editingInputId, setEditingInputId] = useState<number | null>(null);

  const addPreConversationInput = () => {
    const newId = preConversationInputs.length > 0 
      ? Math.max(...preConversationInputs.map(input => input.id)) + 1 
      : 1;
    
    setPreConversationInputs([
      ...preConversationInputs, 
      { id: newId, label: "", placeholder: "", required: false }
    ]);
  };

  const updatePreConversationInput = (id, field, value) => {
    setPreConversationInputs(
      preConversationInputs.map(input => 
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const removePreConversationInput = (id) => {
    setPreConversationInputs(
      preConversationInputs.filter(input => input.id !== id)
    );
  };

  const toggleEditMode = (id: number) => {
    setEditingInputId(editingInputId === id ? null : id);
  };

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
          <div className="space-y-2">
            <Label htmlFor="brandingText">Branding Text</Label>
            <Input id="brandingText" value={brandingText} onChange={e => setBrandingText(e.target.value)} placeholder="Enter branding text" />
          </div>
          
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
      
      {/* Pre-conversation Inputs Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Pre-conversation Inputs</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Add fields that users must fill in before starting a conversation with your chatbot.
        </p>
        <div className="space-y-4">
          {preConversationInputs.map((input) => (
            <div key={input.id} className="p-4 border rounded-md space-y-4 bg-background">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Input Field #{input.id}</h4>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => toggleEditMode(input.id)}
                    className="h-8 w-8"
                    title={editingInputId === input.id ? "Cancel Editing" : "Edit"}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removePreConversationInput(input.id)}
                    className="h-8 w-8"
                    title="Remove Input"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {editingInputId === input.id ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`input-label-${input.id}`}>Label</Label>
                    <Input 
                      id={`input-label-${input.id}`} 
                      value={input.label} 
                      onChange={e => updatePreConversationInput(input.id, 'label', e.target.value)} 
                      placeholder="e.g., Name, Email, etc." 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`input-placeholder-${input.id}`}>Placeholder</Label>
                    <Input 
                      id={`input-placeholder-${input.id}`} 
                      value={input.placeholder} 
                      onChange={e => updatePreConversationInput(input.id, 'placeholder', e.target.value)} 
                      placeholder="e.g., Please enter your name" 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id={`input-required-${input.id}`} 
                      checked={input.required} 
                      onCheckedChange={value => updatePreConversationInput(input.id, 'required', value)} 
                    />
                    <Label htmlFor={`input-required-${input.id}`}>Required field</Label>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p><strong>Label:</strong> {input.label || 'Not set'}</p>
                  <p><strong>Placeholder:</strong> {input.placeholder || 'Not set'}</p>
                  <p><strong>Required:</strong> {input.required ? 'Yes' : 'No'}</p>
                </div>
              )}
            </div>
          ))}
          
          <Button 
            variant="outline" 
            onClick={addPreConversationInput} 
            className="w-full"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Input Field
          </Button>
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
        <h3 className="text-xl font-bold mb-4">Time Zone & Location</h3>
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
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
              placeholder="e.g., New York, USA" 
            />
            <p className="text-sm text-muted-foreground">
              Helps the chatbot provide location-specific information
            </p>
          </div>
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
