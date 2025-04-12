
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";

const StyleConfigurationSection = () => {
  const [botName, setBotName] = useState("Assistant");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  const [secondaryColor, setSecondaryColor] = useState("#f0f4f8");
  const [backgroundType, setBackgroundType] = useState("color");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState("roboto");
  const [fontSize, setFontSize] = useState("14");
  const [fontWeight, setFontWeight] = useState("normal");

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleBackgroundImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setBackgroundImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Style Configuration</h2>
        <p className="text-muted-foreground mb-6">
          Customize the appearance of your chatbot to match your brand identity.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Bot Identity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="botName">Bot Name</Label>
              <Input 
                id="botName" 
                value={botName} 
                onChange={(e) => setBotName(e.target.value)}
                placeholder="Enter bot name" 
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Avatar</Label>
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                {avatar ? (
                  <AvatarImage src={avatar} alt={botName} />
                ) : (
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {botName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              
              <div>
                <Input 
                  type="file" 
                  id="avatar-upload" 
                  className="hidden" 
                  onChange={handleAvatarUpload}
                  accept="image/*"
                />
                <label htmlFor="avatar-upload">
                  <Button type="button" variant="outline" className="mb-2 flex gap-2 items-center">
                    <Upload className="h-4 w-4" />
                    Upload Photo
                  </Button>
                </label>
                <p className="text-xs text-muted-foreground">
                  Recommended: 512x512px JPG, PNG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Color Panel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex gap-3">
                <div 
                  className="h-10 w-10 rounded-md border" 
                  style={{ backgroundColor: primaryColor }}
                />
                <Input 
                  id="primaryColor" 
                  type="text"
                  value={primaryColor} 
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
                <Input 
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-10 p-1 h-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <div className="flex gap-3">
                <div 
                  className="h-10 w-10 rounded-md border" 
                  style={{ backgroundColor: secondaryColor }}
                />
                <Input 
                  id="secondaryColor" 
                  type="text"
                  value={secondaryColor} 
                  onChange={(e) => setSecondaryColor(e.target.value)}
                />
                <Input 
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-10 p-1 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Background</h3>
        <Tabs value={backgroundType} onValueChange={setBackgroundType} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="color">Color</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>

          <TabsContent value="color" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="backgroundColor">Background Color</Label>
              <div className="flex gap-3">
                <div 
                  className="h-10 w-10 rounded-md border" 
                  style={{ backgroundColor }}
                />
                <Input 
                  id="backgroundColor" 
                  type="text"
                  value={backgroundColor} 
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <Input 
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-10 p-1 h-10"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="image" className="space-y-4">
            <div className="space-y-2">
              <Label>Background Image</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                {backgroundImage ? (
                  <div className="relative">
                    <img 
                      src={backgroundImage} 
                      alt="Background" 
                      className="max-h-40 mx-auto rounded"
                    />
                    <Button 
                      variant="destructive" 
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setBackgroundImage(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <Input 
                      type="file" 
                      id="bg-upload" 
                      className="hidden" 
                      onChange={handleBackgroundImageUpload}
                      accept="image/*"
                    />
                    <label 
                      htmlFor="bg-upload" 
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p>Drop image here or click to browse</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Recommended: JPG, PNG (1200x800px)
                      </p>
                    </label>
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Text Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fontFamily">Font Family</Label>
            <Select value={fontFamily} onValueChange={setFontFamily}>
              <SelectTrigger>
                <SelectValue placeholder="Select font family" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roboto">Roboto</SelectItem>
                <SelectItem value="open-sans">Open Sans</SelectItem>
                <SelectItem value="lato">Lato</SelectItem>
                <SelectItem value="montserrat">Montserrat</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fontSize">Font Size</Label>
            <Select value={fontSize} onValueChange={setFontSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12px</SelectItem>
                <SelectItem value="14">14px</SelectItem>
                <SelectItem value="16">16px</SelectItem>
                <SelectItem value="18">18px</SelectItem>
                <SelectItem value="20">20px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fontWeight">Font Weight</Label>
            <Select value={fontWeight} onValueChange={setFontWeight}>
              <SelectTrigger>
                <SelectValue placeholder="Select font weight" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Text Preview</h3>
        <div 
          className="border rounded-lg p-4 space-y-4" 
          style={{ 
            fontFamily: fontFamily === 'roboto' ? 'Roboto, sans-serif' : 
                      fontFamily === 'open-sans' ? 'Open Sans, sans-serif' : 
                      fontFamily === 'lato' ? 'Lato, sans-serif' : 
                      fontFamily === 'montserrat' ? 'Montserrat, sans-serif' : 
                      'Poppins, sans-serif',
            fontSize: `${fontSize}px`,
            fontWeight,
          }}
        >
          <p className="font-bold">Hello, I'm {botName}</p>
          <p>This is how your chatbot text will appear. The font style affects readability and user experience.</p>
          
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <span className="font-bold">Assistant:</span> 
              <span>Welcome! How can I help you today?</span>
            </div>
            
            <div className="flex gap-3">
              <span className="font-bold">User:</span> 
              <span>Can you tell me more about your services?</span>
            </div>
          </div>
        </div>
      </div>

      <Button className="w-full mt-8">Save Style Configuration</Button>
    </div>
  );
};

export default StyleConfigurationSection;
