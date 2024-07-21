package com.medev.smartchatbot.service;


import com.medev.smartchatbot.entites.History;
import com.medev.smartchatbot.repository.HistoryRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;


@BrowserCallable
@AnonymousAllowed
public class ChatAiService {

    private ChatClient chatClient;
    private VectorStore vectorStore;
    private HistoryRepository historyRepository;

    @Value("classpath:/prompt/prompt-template.st")
    private Resource promptResource;


    public ChatAiService(ChatClient.Builder builder, VectorStore vectorStore, HistoryRepository historyRepository) {
        this.chatClient = builder.build();
        this.vectorStore = vectorStore;
        this.historyRepository = historyRepository;
    }

    public String ragChat(String question) {

        String answer = chatClient.prompt()
                .user(question)
                .call()
                .content();

        History history = History.builder()
                .question(question)
                .answer(answer)
                .createdAt(LocalDateTime.now())
                .build();

        historyRepository.save(history);
        return answer;
    }

    public String ragChat2(String question) {
        List<Document> documents = vectorStore.similaritySearch(question);

        List<String> context =  documents.stream().map(Document::getContent).toList();

        PromptTemplate promptTemplate = new PromptTemplate(promptResource);

        Prompt prompt =promptTemplate.create(Map.of("context", context,"question",question));

        return chatClient.prompt(prompt)
                .call()
                .content();
    }

    public List<History> getHistory() {
        return historyRepository.findAll();
    }



}
