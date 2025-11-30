# CaseFlow — AI Roadmap

CaseFlow will gradually integrate AI to support consultants in understanding cases faster, communicating with clients, and planning next steps.

---

## AI Feature 1 — Case Summary Generator

**Goal:** Generate a concise summary of a case based on its attributes and activity history.

- Endpoint (planned): POST /api/cases/:id/ai/summary
- Backend:
  - Fetch case + client + activities for the given id
  - Build a prompt for the LLM
  - Return a 2–4 paragraph summary
- Frontend:
  - Button on `/cases/[id]`: "Generate AI Summary"
  - Display summary in a card or panel

---

## AI Feature 2 — Email Draft Assistant

**Goal:** Help consultants write professional client emails quickly.

- Endpoint (planned): POST /api/cases/:id/ai/email
- Input:
  - Case id
  - Email intent (follow-up, missing docs, status update, etc.)
- Output:
  - Suggested email body text
- Frontend:
  - Dropdown: choose email type
  - Show generated text in a textarea for copy/edit

---

## AI Feature 3 — Document Checklist Generator

**Goal:** Suggest a document checklist based on case type (e.g. Student Visa, Work Visa).

- Endpoint (planned): POST /api/cases/:id/ai/checklist
- Input:
  - Case id (including type)
- Output:
  - List of documents + short descriptions
- Frontend:
  - "Generate Checklist" button on case detail
  - Show items with checkboxes (optional)

---

## AI Feature 4 — Case Insights (Risks & Next Steps)

**Goal:** Provide insight on potential risks and recommended next actions.

- Endpoint (planned): POST /api/cases/:id/ai/insights
- Backend:
  - Provide case status and activity log context
  - Ask LLM for risks, missing things, and recommended actions
- Frontend:
  - “AI Insights” panel with bullet points

---

## AI Feature 5 — Smart Search (Long-term)

**Goal:** Allow natural language search across cases and activities.

- Examples:
  - "cases waiting for medical exam"
  - "student visa cases updated last week"
- Implementation idea:
  - Use vector embeddings for textual fields (titles, messages)
  - API endpoint to perform similarity search
