type ProficiencyLevel =
    | "Native"
    | "Fluent"
    | "Professional"
    | "Intermediate"
    | "Basic"

type Language = {
    id: number;
    name: string;
    proficiency: ProficiencyLevel;
}

export let languages: Language[] = [
    {
        id: 1,
        name: "English",
        proficiency: "Professional",
    },
    {
        id: 2,
        name: "Spanish",
        proficiency: "Professional",
    },
    {
        id: 3,
        name: "French",
        proficiency: "Intermediate",
    },
    {
        id: 4,
        name: "Arabic",
        proficiency: "Native",
    },
    {
        id: 5,
        name: "Amazigh",
        proficiency: "Native",
    }
]