
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Link as LinkIcon, Upload, XCircle } from "lucide-react";

const FineTuningSection = () => {
  const [url, setUrl] = useState("");
  const [extractMethod, setExtractMethod] = useState("url");
  const [trainingData, setTrainingData] = useState<Array<{id: string, title: string, date: string}>>([
    { id: "1", title: "Company Product Documentation", date: "2023-04-10" },
    { id: "2", title: "FAQ Knowledge Base", date: "2023-04-05" }
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real application, would process uploaded files
    console.log("Files to upload:", e.target.files);
  };

  const handleUrlExtract = () => {
    if (url) {
      // In a real application, would extract content from URL
      console.log("Extracting from URL:", url);
      // Add to training data
      setTrainingData([
        { 
          id: (trainingData.length + 1).toString(), 
          title: url.replace(/(^\w+:|^)\/\//, '').split('/')[0], 
          date: new Date().toISOString().split('T')[0] 
        },
        ...trainingData
      ]);
      setUrl("");
    }
  };

  const removeTrainingData = (id: string) => {
    setTrainingData(trainingData.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Fine Tuning</h2>
        <p className="text-muted-foreground mb-6">
          Adjust AI parameters and training settings for your chatbot.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Extract Content</h3>
        <Tabs value={extractMethod} onValueChange={setExtractMethod} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="url">From URL</TabsTrigger>
            <TabsTrigger value="files">From Files</TabsTrigger>
          </TabsList>

          <TabsContent value="url" className="space-y-4">
            <div className="flex items-end gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="url">Enter URL (e.g., https://example.com)</Label>
                <Input 
                  id="url" 
                  value={url} 
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com" 
                />
              </div>
              <Button onClick={handleUrlExtract} className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Extract
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="files" className="space-y-4">
            <Label>Supported formats: .txt, .pdf, .doc, .docx</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                onChange={handleFileUpload}
                multiple
                accept=".txt,.pdf,.doc,.docx"
              />
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                <p>Drop files here or click to browse</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Upload documents to train your chatbot
                </p>
              </label>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Training Data</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Extracted content history (newest first)
        </p>

        <div className="space-y-3">
          {trainingData.length === 0 ? (
            <div className="text-center p-6 border rounded-lg">
              <p className="text-muted-foreground">No training data available</p>
            </div>
          ) : (
            trainingData.map(item => (
              <div 
                key={item.id} 
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">Added on {item.date}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeTrainingData(item.id)}
                >
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>

      <Button className="w-full mt-8">Save Training Data</Button>
    </div>
  );
};

export default FineTuningSection;
