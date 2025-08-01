
export default function SectionDivider() {
    return (
      <div className="relative -my-1 w-full h-auto">
        <div className="absolute inset-0 bg-background" />
        <div className="relative h-20 overflow-hidden bg-transparent">
          <div
            className="absolute -top-1/2 left-0 w-full h-[200%] animate-gradient-border bg-[length:400%_400%] bg-gradient-to-r from-primary via-accent to-ring"
            style={{
              clipPath: 'ellipse(100% 60% at 50% 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(var(--background)) 50%)',
            }}
          />
        </div>
      </div>
    );
  }
  