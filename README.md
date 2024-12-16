# inGenius_Project
Project for InGenius Case Study Avedian Martin 

InGenius is an innovative B2B platform combining artificial intelligence with professional learning. The goal is to create a high-end, futuristic, and credible user interface tailored to the Middle Eastern market while reflecting technological innovation and the stability of a B2B solution.

Context
InGenius aims to deliver a professional learning experience enriched by AI, targeting businesses in the Middle East—a market sensitive to premium and credible experiences. The interface must convey:

Innovation (AI): Emphasizing advanced technology and the added value of AI.
Professionalism (B2B): A sleek, rigorous, and balanced aesthetic that inspires trust.
Luxury & Cultural Adaptation: Premium color palette, gold accents, deep blues, and high-end typography tailored to the preferences of the Middle Eastern market, with a structure designed to support right-to-left (RTL) readability.
Project Structure
The project uses HTML + Tailwind CSS as the foundation for the front end. The code is versioned on GitHub, and the design was initially defined in Figma, then refined using AI tools like ChatGPT for idea generation and coding assistance.

Installation
Clone the repository:
git clone https://github.com/mavedian/inGenius_Project.git  
cd inGenius_Project  

Install dependencies:
npm install  
Generate CSS with Tailwind:

npm run build  
This command processes src/input.css and generates dist/output.css.
Open index.html in your browser to view the interface.

Tailwind CSS Configuration
Configuration details are in tailwind.config.js.
Defined colors and fonts include:

Palette: text-primary (#181818), blue (#007CFF), gold (#C89933), white-2 (#F4E8D3).
Main Font: IBM Plex Sans (imported via Google Fonts), set in fontFamily.sans.
Tailwind classes (e.g., text-text-primary, bg-blue/50, font-sans) are used in the HTML to faithfully implement the design.

File Structure
plaintext
Copier le code
.  
├─ src/  
│  ├─ index.html         # Main HTML file  
│  ├─ input.css          # Base file for Tailwind (@tailwind directives)
   ├─ style.css  
├─ dist/  
│  └─ output.css         # Tailwind-generated CSS  
├─ Media/  
│  ├─ Images  
│  ├─ Fonts  
│  ├─ Icons  
├─ package.json  
├─ package-lock.json  
├─ postcss.config.js  
├─ tailwind.config.js  
└─ README.md             # This file

Design & UX/UI Decisions
- Typography: IBM Plex Sans for a blend of modernity, readability, and premium appeal.
- Colors: A premium palette (deep blues, gold, off-white) to evoke luxury and suit the Middle Eastern market.
- Layout & Components: Grid layouts (Tailwind), consistent alignments, generous spacing.
"Wow" Moments: Subtle gradients, light transitions, and potential for future micro-interactions.

AI Utilization in the Process
Visual Ideation: ChatGPT contributed to exploring artistic directions, selecting a culturally relevant palette, and justifying design choices.
- Code Optimization: Figma-generated classes were streamlined using AI recommendations for clean and coherent Tailwind code.
- Documentation Support: AI helped structure this documentation and simplify technical implementation (e.g., Git configuration, GitHub authentication).
- Deployment & Collaboration

The code is hosted on GitHub, enabling collaboration, pull requests, and version tracking.
It is recommended to use a personal access token or SSH keys for authenticating git push commands.

Future Improvements
Accessibility: Ensure contrast compliance, add ARIA attributes, and test with screen readers.
Reusable Components: Build a more comprehensive design system with documented UI components (possibly via Storybook).
Animations & AI Interactions: Add micro-animations, explicit AI icons, and more visible contextual suggestions.
Internationalization: Facilitate the transition to Arabic (RTL) layouts as needed.
Responsive Design: Ensure adaptability for mobile and tablet devices.
Resources & References
Tailwind CSS Documentation: https://v2.tailwindcss.com/docs
IBM Plex Sans on Google Fonts: https://fonts.google.com/specimen/IBM+Plex+Sans
GitHub Docs - Token Authentication: https://docs.github.com/en/authentication
Initial Design & Visual Direction in Figma: Figma Design https://www.figma.com/design/4jgVSPYC1xGLzqBkPObR03/InGenius-Case-Study?node-id=2-669&t=O77EhPslLrNZ6Ojn-1
