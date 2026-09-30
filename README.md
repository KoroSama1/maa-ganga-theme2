# Maa Ganga College of Nursing — Client Demo v2

A redesigned React/Vite demo inspired by the supplied reference screenshots, but using a distinct visual identity for a nursing institution.

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Admin demo: `http://localhost:5173/admin`

## Demo CMS
The Admin portal is intentionally unauthenticated for the client demo. It stores uploads/content in browser localStorage.

Production direction:
React Admin → .NET Web API → EF Core → SQL Server + object storage (for images/PDFs)

## Design direction
- Deep indigo/navy + warm gold + coral accent
- Modern responsive grid layout
- Serif editorial headings mixed with clean UI typography
- Structured institutional navigation
- News & Notices page modeled as a classic notice board with modern spacing/search
- Faculty and media management demo

Source content is based on the supplied client document. The News page contains clearly demo/sample notices because no actual news list was supplied.
