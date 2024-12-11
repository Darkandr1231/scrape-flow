import { ExecutionEnvironment } from "@/types/executor";
import { LaunchBrowserTask } from "../task/LaunchBrowser";
import { PageToHtmlTask } from "../task/PageToHtml";


export async function PageToHtmlExecutor(
    environment: ExecutionEnvironment<typeof PageToHtmlTask>
):Promise<boolean> {
    try {
        const websiteUrl = environment.getInput("Web page");
        console.log("@@WEBSITE URL", websiteUrl);
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}