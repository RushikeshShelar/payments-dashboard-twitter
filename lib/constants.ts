import { Order } from "@/app/(dashboard)/dashboard/components/columns";

  const transactions: Order[] = [];
  
  for (let i = 1; i <= 100; i++) {
    const transaction: Order = {
      id: `#${i}`,
      date: getRandomDate(),
      amount: getRandomAmount().toString(),
      fees: getRandomFees().toString(),
    };
    transactions.push(transaction);
  }
  
  function getRandomDate(): string {
    const day = Math.floor(Math.random() * 30) + 1;
    const month = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * (2022 - 2000)) + 2000;
    return `${day}/${month}/${year}`;
  }
  
  function getRandomAmount(): number {
    return Math.floor(Math.random() * 100000) + 1000;
  }
  
  function getRandomFees(): number {
    return Math.floor(Math.random() * 200) + 50;
  }
  
  export { transactions };
  