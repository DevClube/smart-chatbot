package com.medev.smartchatbot.controller;


import com.medev.smartchatbot.service.ChatAiService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
public class chatRestController {

    private ChatAiService chatAiService;

    public chatRestController(ChatAiService chatAiService) {
        this.chatAiService = chatAiService;
    }

    @GetMapping(value = "/ask", produces = MediaType.TEXT_PLAIN_VALUE)
    public String Ask(String message) {
        return chatAiService.ragChat(message);
    }
}
