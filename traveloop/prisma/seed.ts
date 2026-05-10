import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'alex.mercer@example.com' },
    update: {},
    create: {
      clerkId: 'user_2xyz123',
      email: 'alex.mercer@example.com',
      firstName: 'Alex',
      lastName: 'Mercer',
      location: 'New York, USA',
    },
  });

  const trip1 = await prisma.trip.create({
    data: {
      userId: user.id,
      title: 'Amalfi Coast Escape',
      destination: 'Italy',
      status: 'upcoming',
      progress: 80,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuiePLxzau_rs-9lvsxFPDfgV2fPM4PS2b_UPb7RYOu64R_OcV8RfAAplKOtjq_BepcJhg9OejILvuita8vX-s1B6eLbenaDwRUa2VjVP61Yd-81ulK8BmVZX1_ccdOFTGOrcS-m7L_hqqIPyLWTGtVpyftbHKwZGxu3g7L_kMScRkUpGPA2cKrT0uaf9ySI9TdjuIAjCcdGWQAem74DRfVbxe0juiVdMlLZaaK1mLKGXPGNam5ulWgneKSPIj-tNf5S0Yvf0_qYA',
      activities: {
        create: [
          {
            title: 'Guided Hike & Picnic',
            description: 'Private guide. Includes a gourmet picnic overlooking the coast.',
            time: '09:00',
            cost: 150,
            type: 'activity',
            tags: 'ACTIVE,NATURE',
          }
        ]
      },
      expenses: {
        create: [
          { title: 'Flight', amount: 800, category: 'Flights' },
          { title: 'Hotel Sirenuse', amount: 1200, category: 'Hotels' }
        ]
      }
    }
  });

  console.log({ user, trip1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
