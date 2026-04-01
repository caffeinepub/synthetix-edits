import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      company: string;
      projectBrief: string;
      email: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.submitContact({
        name: data.name,
        company: data.company,
        projectBrief: data.projectBrief,
        email: data.email,
      });
    },
  });
}
