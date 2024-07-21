package com.medev.smartchatbot.controller;


import com.medev.smartchatbot.entites.History;
import com.medev.smartchatbot.repository.HistoryRepository;
import com.medev.smartchatbot.service.ChatAiService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/chat")
public class chatRestController {

    private ChatAiService chatAiService;
    private HistoryRepository historyRepository;

    public chatRestController(ChatAiService chatAiService, HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
        this.chatAiService = chatAiService;
    }

    @GetMapping(value = "/ask", produces = MediaType.TEXT_PLAIN_VALUE)
    public String Ask(String message) {

        String answer = chatAiService.ragChat(message);
        History history = History.builder()
                .question(message)
                .answer(answer)
                .createdAt(LocalDateTime.now())
                .build();

        historyRepository.save(history);

        return answer;
    }

    @GetMapping(value = "/chot", produces = MediaType.TEXT_PLAIN_VALUE)
    public String Chat(String message) {

        String answer = chatAiService.ragChat2(message);

        return answer;
    }


    @GetMapping("/history11")
    public List<History> GetAllHistory() {
        return historyRepository.findAll();
    }
}
