"use client";

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CoinsIcon } from 'lucide-react';
import { CreditsPack } from '@/types/billing';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

function CreditsPurchase() {
  return (
    <Card>
        <CardHeader className="text-2xl font-bold flex items-center gap-2">
            <CardTitle>
                <CoinsIcon className="h-6 w-6 text-primary" />
                Purchase Credits
            </CardTitle>
            <CardDescription>
                Select the number of credits you want to purchase
            </CardDescription>
        </CardHeader>
        <CardContent>
            <RadioGroup>
                {CreditsPack.map((pack) => (
                    <div key={pack.id}>
                        <RadioGroupItem value={pack.id} id={pack.id} />
                        <Label className="flex justify-between w-full cursor-pointer">
                            <span className="font-medium">
                                {pack.name} - {pack.label}
                            </span>
                            <span className="font-bold text-primary">
                                $ {(pack.price / 100).toFixed(2)}
                            </span>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
    </Card>
  );
}

export default CreditsPurchase