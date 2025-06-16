import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Details are required";
    } else if (formData.details.trim().length < 10) {
      newErrors.details =
        "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };



 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://formsubmit.co/ajax/shettyshashank089@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.details,
        _captcha: false,
        _template: "table",
        _subject: "New Message from Portfolio Contact Form",
      }),
    });

    const result = await response.json();

    if (result.success === "true" || result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", details: "" });
        setIsSubmitted(false);
      }, 4000);
    } else {
      console.error("Failed to submit:", result);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};


  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Card className="max-w-md mx-auto border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="relative inline-block mb-4">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-green-600 mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Message Sent Successfully!
            </motion.h3>

            <motion.p
              className="text-muted-foreground mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank you for reaching out! I'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              className="flex items-center justify-center text-sm text-green-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mr-2"
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.div>
              Made with passion
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-md mx-auto shadow-xl border-2 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(139, 92, 246, 0.05))",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.05), transparent, rgba(139, 92, 246, 0.05))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.05), transparent, rgba(139, 92, 246, 0.05))",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <CardContent className="p-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Label htmlFor="name" className="flex items-center font-medium">
                <motion.div
                  animate={{
                    scale: focusedField === "name" ? 1.2 : 1,
                    color: focusedField === "name" ? "#3b82f6" : "#6b7280",
                  }}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <User className="h-4 w-4" />
                </motion.div>
                Name
              </Label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  className={cn(
                    "transition-all duration-300 border-2",
                    errors.name
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "focus-visible:border-primary focus-visible:ring-primary/20",
                    focusedField === "name" && "shadow-lg",
                  )}
                  disabled={isSubmitting}
                />
              </motion.div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mr-1"
                    >
                      ⚠️
                    </motion.span>
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label htmlFor="email" className="flex items-center font-medium">
                <motion.div
                  animate={{
                    scale: focusedField === "email" ? 1.2 : 1,
                    color: focusedField === "email" ? "#3b82f6" : "#6b7280",
                  }}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <Mail className="h-4 w-4" />
                </motion.div>
                Email
              </Label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className={cn(
                    "transition-all duration-300 border-2",
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "focus-visible:border-primary focus-visible:ring-primary/20",
                    focusedField === "email" && "shadow-lg",
                  )}
                  disabled={isSubmitting}
                />
              </motion.div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mr-1"
                    >
                      ⚠️
                    </motion.span>
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Details Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label
                htmlFor="details"
                className="flex items-center font-medium"
              >
                <motion.div
                  animate={{
                    scale: focusedField === "details" ? 1.2 : 1,
                    color: focusedField === "details" ? "#3b82f6" : "#6b7280",
                  }}
                  transition={{ duration: 0.2 }}
                  className="mr-2"
                >
                  <MessageSquare className="h-4 w-4" />
                </motion.div>
                Message Details
              </Label>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.02 }}
              >
                <Textarea
                  id="details"
                  placeholder="Tell me about your project, questions, or how I can help you..."
                  rows={4}
                  value={formData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                  onFocus={() => setFocusedField("details")}
                  onBlur={() => setFocusedField("")}
                  className={cn(
                    "transition-all duration-300 resize-none border-2",
                    errors.details
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "focus-visible:border-primary focus-visible:ring-primary/20",
                    focusedField === "details" && "shadow-lg",
                  )}
                  disabled={isSubmitting}
                />
              </motion.div>
              <AnimatePresence>
                {errors.details && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mr-1"
                    >
                      ⚠️
                    </motion.span>
                    {errors.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full text-lg py-6 rounded-xl relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: isSubmitting ? "-100%" : "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: isSubmitting ? 0 : Infinity,
                      repeatDelay: 2,
                    }}
                  />

                  <motion.div
                    className="flex items-center justify-center relative z-10"
                    animate={{
                      y: isSubmitting ? [0, -2, 0] : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isSubmitting ? Infinity : 0,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{
                            rotate: [0, 15, 0],
                            x: [0, 2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="mr-2"
                        >
                          <Send className="h-5 w-5" />
                        </motion.div>
                        <span className="group-hover:scale-105 transition-transform duration-200">
                          Send Message
                        </span>
                      </>
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </form>

          {/* Form completion indicator */}
          <motion.div
            className="mt-4 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨ I typically respond within 24 hours
            </motion.span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
