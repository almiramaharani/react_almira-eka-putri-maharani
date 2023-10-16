import { openai } from "../configs/openai";

export const openAI = {
    getResponseAI: async (input) => {
        try {
            const response = await openai.chat.completions.create({
                messages: [
                    { role: 'system', content: "Anda adalah AI yang hanya memberi layanan untuk generate deskripsi produk. Maksimal kalimat deskripsi adalah 3 kalimat."},
                    { role: 'user', content: input}
                ],
                model: 'gpt-3.5-turbo',
                max_tokens: 150,
            });

            return response.choices[0].message.content;
        } catch (error) {
            throw new Error(error);
        }
    },
}