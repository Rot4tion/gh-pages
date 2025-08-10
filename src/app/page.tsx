"use client";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const discordIcon = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 text-white"
  >
    <title>Discord</title>
    <path
      fill="currentColor"
      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
    />
  </svg>
);
const fakebookIcon = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 text-white"
  >
    <title>Facebook</title>
    <path
      fill="currentColor"
      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
    />
  </svg>
);

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-0px)] flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black to-background" />
      <div className="pointer-events-none absolute -z-10 size-[40rem] rounded-full bg-primary/10 blur-3xl" />

      <section className="max-w-xl w-full text-center space-y-7 bg-card/60 backdrop-blur border rounded-2xl p-8 shadow-md">
        <div className="mx-auto size-16 rounded-full bg-muted/60 flex items-center justify-center">
          <Wrench className="size-8 text-primary" aria-hidden />
        </div>
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Hệ thống đang bảo trì
          </h1>
          <p className="text-sm text-muted-foreground">
            Chúng tôi đang bảo trì hệ thống để mang đến trải nghiệm tốt nhất cho
            bạn. Vui lòng quay lại sau ít phút. Xin lỗi vì sự bất tiện này!
          </p>
        </header>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Liên hệ hỗ trợ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="secondary" className="gap-2">
              <a
                href="https://discord.gg/rYPT6HJPSa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <span className="size-4" aria-hidden>
                  {discordIcon}
                </span>
                Discord
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a
                href="https://www.facebook.com/subgamezoneoffical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="size-4" aria-hidden>
                  {fakebookIcon}
                </span>
                Facebook
              </a>
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Nếu cần hỗ trợ khẩn, vui lòng nhắn cho chúng tôi qua Discord hoặc
          Facebook.
        </p>
      </section>
    </main>
  );
}
