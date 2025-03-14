export default function Footer() {
  return (
    <footer className="text-center p-4 mt-10 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} ترجملي. جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
