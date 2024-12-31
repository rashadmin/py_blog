import { createContext,useContext } from "react";


const ApiContext = createContext();


export default function ApiProvider({ children }) {
    // const api = new ApiClient();
    const api = {
        chat : [
            {"user": "Hi, can you help me with my account issue?", "agent": "Sure, what seems to be the problem?"},
            {"user": "I can’t log in. It says my password is incorrect.", "agent": "Have you tried resetting your password?"},
            {"user": "Not yet. Can you guide me through it?", "agent": "Of course. Click 'Forgot Password' and follow the prompts."},
            {"user": "Alright, I’ll try that. Thanks!", "agent": "Okay."}
                ],
        hists : [
          {
              id: 1,
              title: "Exploring the Unknown",
              timestamp: "2 hours ago",
              social_media: ["LinkedIn", "Facebook", "X"],
              description: "Dive into the mysteries of life and science, and share your discoveries on LinkedIn, Facebook, and X."
          },
          {
              id: 2,
              title: "Adventures in the Wild",
              timestamp: "5 minutes ago",
              social_media: ["LinkedIn", "Facebook", "X"],
              description: "Embark on thrilling adventures and learn how to connect with fellow explorers on social media platforms."
          },
          {
              id: 3,
              title: "Technology and Tomorrow",
              timestamp: "30 seconds ago",
              social_media: ["LinkedIn", "Facebook", "X"],
              description: "Discover how emerging technologies are shaping our future and engage with tech enthusiasts online."
          },
          {
              id: 4,
              title: "A Journey Through Time",
              timestamp: "1 day ago",
              social_media: ["LinkedIn", "Facebook", "X"],
              description: "Explore history's wonders and milestones, and discuss their impact on modern society through social media."
          },
          {
              id: 5,
              title: "Reflections on Progress",
              timestamp: "3 hours ago",
              social_media: ["LinkedIn", "Facebook", "X"],
              description: "Reflect on humanity's achievements and share your thoughts on progress and innovation with your network."
          }
        ]

    }
    return (
      <ApiContext.Provider value={api}>
        {children}
      </ApiContext.Provider>
    );
  }
  
  export function useApi() {
    return useContext(ApiContext);
  }