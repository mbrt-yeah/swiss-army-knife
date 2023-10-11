export function getObjectPropertyValue(fieldName: string, record: any): string | undefined {
    if (!fieldName || !record)
        return undefined;

    return record[fieldName] || record[fieldName.toUpperCase()] || record[fieldName.toLowerCase()] || undefined;
};
