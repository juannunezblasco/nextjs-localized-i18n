import { FormBasic } from "@/modules/form/components/form-basic";
import { useTranslation } from "@/modules/i18n";
import { LanguageSwitcher } from "@/modules/i18n/components/LanguageSwitcher";

export default async function Home({ params: { locale } }: { params: { locale: string } } ) {

  const { t } = await useTranslation(locale);

  return (
    <>  
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold my-8">{ t('wellcome') }</p>
        <FormBasic />
      </div>
    </>
  );
}
