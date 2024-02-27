interface FormatDateProps {
  formatDate: string;
  format: any;
}

export const formatDate = ({ formatDate, format }: FormatDateProps) => {
  const dateTime = new Date(formatDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = format.dateTime(dateTime, options);

  return date;
};

export const formatDateExperience = ({ formatDate, format }: FormatDateProps) => {
  const dateTime = new Date(formatDate);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
  };

  // Obtén la cadena de fecha formateada
  const formattedDate = format.dateTime(dateTime, options);

  // Obtén el año por separado
  const year = dateTime.getFullYear();

  // Crea la cadena final en el formato deseado
  const finalFormat = `${formattedDate}. ${year}`;

  return finalFormat;
};

interface FormatHourProps {
  clientDate: Date;
  clientTimeZone: string;
}