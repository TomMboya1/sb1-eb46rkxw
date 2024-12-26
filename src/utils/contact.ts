interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactForm): Promise<void> => {
  // In a real app, this would send the data to a server
  console.log('Sending message:', data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
};