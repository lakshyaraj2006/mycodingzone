interface Blog {
    title: string;
    slug: string;
    description: string;
    content: string;
    imageUrl?: string
}

export const blogs: Blog[] = [
    {
        title: "JavaScript: The Language of the Web",
        slug: "javascript-language-of-the-web",
        description:
            "JavaScript is essential for front-end development and powers dynamic web applications.",
        content: `### JavaScript
    
    JavaScript is **essential** for building modern websites. It’s the language behind interactive UI, supported by all major browsers.
    
    - Used in frameworks like **React**, **Vue**, and **Angular**
    - Runs in the browser and on servers (Node.js)
    - Powers modern frontend development
    
    \`console.log("Hello, world!");\``,
    },
    {
        title: "Python: Simplicity Meets Power",
        slug: "python-simplicity-meets-power",
        description:
            "Python is known for its readability and is widely used in data science, AI, and web development.",
        content: `### Python
    
    **Python** emphasizes readability and simplicity. It's often the first choice for beginners, yet powerful in production environments.
    
    - Popular in **machine learning** and **automation**
    - Strong community and library support
    - Clean, expressive syntax
    
    \`\`\`python
    print("Hello, world!")
    \`\`\``,
    },
    {
        title: "Java: Write Once, Run Anywhere",
        slug: "java-write-once-run-anywhere",
        description:
            "Java remains a strong choice for enterprise applications, Android development, and more.",
        content: `### Java
    
    **Java** has long been the go-to for enterprise development and Android apps.
    
    - Statically typed, object-oriented
    - Runs on the **JVM** (Java Virtual Machine)
    - Used by companies like Google and Amazon
    
    \`\`\`java
    public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, world!");
      }
    }
    \`\`\``,
    },
    {
        title: "C#: Microsoft’s Modern Programming Gem",
        slug: "csharp-modern-programming-gem",
        description:
            "C# is a versatile language used for building desktop apps, games, and web services with .NET.",
        content: `### C#
    
    **C#** is a language developed by Microsoft, perfect for building apps across platforms using the .NET framework.
    
    - Great for **Windows apps**, **Unity games**, and **web APIs**
    - Rich tooling with Visual Studio
    - Modern syntax and strong typing
    
    \`\`\`csharp
    Console.WriteLine("Hello, world!");
    \`\`\``,
    },
    {
        title: "Go: Efficiency and Performance",
        slug: "go-efficiency-and-performance",
        description:
            "Go, or Golang, is known for its speed, simplicity, and strong support for concurrency.",
        content: `### Go (Golang)
    
    **Go** is a compiled language created at Google with a focus on simplicity and concurrency.
    
    - Fast compile times and runtime performance
    - Built-in support for **goroutines** and **channels**
    - Excellent for backend and CLI tools
    
    \`\`\`go
    package main
    
    import "fmt"
    
    func main() {
      fmt.Println("Hello, world!")
    }
    \`\`\``,
    },
    {
        title: "Rust: Safety Without Sacrificing Speed",
        slug: "rust-safety-and-speed",
        description:
            "Rust provides memory safety and performance, making it ideal for systems programming.",
        content: `### Rust
    
    **Rust** guarantees memory safety without a garbage collector, making it a favorite for systems programming.
    
    - Zero-cost abstractions
    - Compile-time guarantees for safety
    - Loved by developers for its reliability
    
    \`\`\`rust
    fn main() {
      println!("Hello, world!");
    }
    \`\`\``,
    },
];
